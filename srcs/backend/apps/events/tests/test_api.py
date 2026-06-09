import pytest
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework import status

from apps.events.models import (
    Cinema,
    Concertos,
    Exposicoes,
    SemanaLabia,
    SpeedHunting,
    SunsetTalks,
    Workshops,
)


pytestmark = pytest.mark.django_db


EVENT_RESOURCES = [
    {
        "name": "exposicoes",
        "list_url": "/api/exposicoes/",
        "detail_url": lambda pk: f"/api/exposicoes/{pk}/",
        "model": Exposicoes,
        "factory": lambda image=None: {
            "title": "Exposição de Teste",
            "category": "DESIGN",
            "synopsis": "Sinopse válida para testes de integração.",
            "artists": "Artista A; Artista B",
            "opening_hours": "09:00 - 18:00",
            "location": "Sala 1",
            "is_active": True,
            "is_highlight": True,
            **({"image": image} if image is not None else {}),
        },
        "patch_factory": lambda: {"title": "Exposição Atualizada"},
        "create_kwargs": {
            "title": "Exposição Base",
            "category": "DESIGN",
            "synopsis": "Sinopse base.",
            "artists": "Artista Base",
            "opening_hours": "10:00 - 12:00",
            "location": "Sala Base",
            "is_active": True,
            "is_highlight": False,
        },
    },
    {
        "name": "sunset-talks",
        "list_url": "/api/sunset-talks/",
        "detail_url": lambda pk: f"/api/sunset-talks/{pk}/",
        "model": SunsetTalks,
        "factory": lambda image=None: {
            "title": "Sunset Talk Teste",
            "description": "Descrição válida para testes.",
            "speaker_name": "Orador Teste",
            "speaker_activity": "Developer",
            "area": "PW",
            "category": "OUTROS",
            "location": "Auditório",
            "is_active": True,
            "is_highlight": True,
            **({"image": image} if image is not None else {}),
        },
        "patch_factory": lambda: {"description": "Descrição atualizada."},
        "create_kwargs": {
            "title": "Sunset Talk Base",
            "description": "Descrição base.",
            "speaker_name": "Orador Base",
            "speaker_activity": "Speaker",
            "area": "PW",
            "category": "OUTROS",
            "location": "Palco Base",
            "is_active": True,
            "is_highlight": False,
        },
    },
    {
        "name": "workshops",
        "list_url": "/api/workshops/",
        "detail_url": lambda pk: f"/api/workshops/{pk}/",
        "model": Workshops,
        "factory": lambda image=None: {
            "title": "Workshop Teste",
            "description": "Descrição do workshop.",
            "mentor_name": "Mentor Teste",
            "mentor_social": "https://example.com/mentor",
            "area": "DESIGN",
            "duration": "2 horas",
            "max_participants": 20,
            "registration_link": "https://example.com/register",
            "category": "DESIGN",
            "location": "Sala Workshop",
            "is_active": True,
            "is_highlight": True,
            **({"image": image} if image is not None else {}),
        },
        "patch_factory": lambda: {"title": "Workshop Atualizado"},
        "create_kwargs": {
            "title": "Workshop Base",
            "description": "Descrição base.",
            "mentor_name": "Mentor Base",
            "mentor_social": "https://example.com/mentor-base",
            "area": "DESIGN",
            "duration": "1 hora",
            "max_participants": 10,
            "registration_link": "https://example.com/register-base",
            "category": "DESIGN",
            "location": "Sala Base",
            "is_active": True,
            "is_highlight": False,
        },
    },
    {
        "name": "cinema",
        "list_url": "/api/cinema/",
        "detail_url": lambda pk: f"/api/cinema/{pk}/",
        "model": Cinema,
        "factory": lambda image=None: {
            "title": "Cinema Teste",
            "director_team": "Equipa Teste",
            "synopsis": "Sinopse de cinema.",
            "area": "VIDEO",
            "duration": "90 min",
            "social_link": "https://example.com/cinema",
            "location": "Sala Cinema",
            "is_active": True,
            "is_highlight": True,
            **({"image": image} if image is not None else {}),
        },
        "patch_factory": lambda: {"director_team": "Equipa Atualizada"},
        "create_kwargs": {
            "title": "Cinema Base",
            "director_team": "Equipa Base",
            "synopsis": "Sinopse base.",
            "area": "VIDEO",
            "duration": "80 min",
            "social_link": "https://example.com/cinema-base",
            "location": "Sala Base",
            "is_active": True,
            "is_highlight": False,
        },
    },
    {
        "name": "concertos",
        "list_url": "/api/concertos/",
        "detail_url": lambda pk: f"/api/concertos/{pk}/",
        "model": Concertos,
        "factory": lambda image=None: {
            "band_name": "Banda Teste",
            "description": "Descrição de concerto.",
            "area": "SOM_MUSICA",
            "info_link": "https://example.com/info",
            "social_link": "https://example.com/social",
            "location": "Palco Teste",
            "is_active": True,
            "is_highlight": True,
            **({"image": image} if image is not None else {}),
        },
        "patch_factory": lambda: {"band_name": "Banda Atualizada"},
        "create_kwargs": {
            "band_name": "Banda Base",
            "description": "Descrição base.",
            "area": "SOM",
            "info_link": "https://example.com/info-base",
            "social_link": "https://example.com/social-base",
            "location": "Palco Base",
            "is_active": True,
            "is_highlight": False,
        },
    },
    {
        "name": "speed-hunting",
        "list_url": "/api/speed-hunting/",
        "detail_url": lambda pk: f"/api/speed-hunting/{pk}/",
        "model": SpeedHunting,
        "factory": lambda image=None: {
            "company_name": "Empresa Teste",
            "company_description": "Descrição da empresa.",
            "category": "MARKETING",
            "area": "MARKETING_COMUNICACAO",
            "location": "Zona Speed",
            "is_active": True,
            **({"company_logo": image} if image is not None else {}),
        },
        "patch_factory": lambda: {"company_name": "Empresa Atualizada"},
        "create_kwargs": {
            "company_name": "Empresa Base",
            "company_description": "Descrição base.",
            "category": "MARKETING",
            "area": "MARKETING_COMUNICACAO",
            "location": "Zona Base",
            "is_active": True,
        },
    },
    {
        "name": "semana-labia",
        "list_url": "/api/semana-labia/",
        "detail_url": lambda pk: f"/api/semana-labia/{pk}/",
        "model": SemanaLabia,
        "factory": lambda image=None: {
            "title": "Semana Labia Teste",
            "description": "Descrição da semana.",
            "featured_projects": "Projeto A; Projeto B",
            "location": "Espaço Teste",
            "is_active": True,
            **({"image": image} if image is not None else {}),
        },
        "patch_factory": lambda: {"title": "Semana Labia Atualizada"},
        "create_kwargs": {
            "title": "Semana Labia Base",
            "description": "Descrição base.",
            "featured_projects": "Projeto Base",
            "location": "Espaço Base",
            "is_active": True,
        },
    },
]


def create_image_file():
    return SimpleUploadedFile(
        "evento-teste.gif",
        (
            b"GIF89a"
            b"\x01\x00\x01\x00"
            b"\x80"
            b"\x00"
            b"\x00"
            b"\x00\x00\x00"
            b"\xff\xff\xff"
            b"!\xf9\x04\x01\x00\x00\x00\x00"
            b",\x00\x00\x00\x00\x01\x00\x01\x00\x00"
            b"\x02\x02D\x01\x00;"
        ),
        content_type="image/gif",
    )


def create_resource_instance(resource):
    return resource["model"].objects.create(**resource["create_kwargs"])


def assert_permission_denied(response):
    assert response.status_code in {
        status.HTTP_401_UNAUTHORIZED,
        status.HTTP_403_FORBIDDEN,
    }


def resource_case_id(value):
    if isinstance(value, (list, tuple)) and len(value) == 2:
        resource, method = value
        return f"{resource['name']}-{method}"
    
    # Se o valor for apenas o dicionário do recurso
    if isinstance(value, dict) and "name" in value:
        return value["name"]
    
    # Fallback caso venha algo inesperado
    return str(value)


@pytest.mark.parametrize("resource", EVENT_RESOURCES, ids=lambda resource: resource["name"])
def test_anonymous_users_can_read_event_resources(api_client, resource):
    instance = create_resource_instance(resource)

    list_response = api_client.get(resource["list_url"])
    detail_response = api_client.get(resource["detail_url"](instance.pk))

    assert list_response.status_code == status.HTTP_200_OK
    assert detail_response.status_code == status.HTTP_200_OK
    assert any(item["id"] == instance.id for item in list_response.data)


@pytest.mark.parametrize(
    ("resource", "method"),
    [(resource, "post") for resource in EVENT_RESOURCES]
    + [(resource, "patch") for resource in EVENT_RESOURCES]
    + [(resource, "delete") for resource in EVENT_RESOURCES],
    ids=resource_case_id,
)
def test_anonymous_users_cannot_write_event_resources(api_client, resource, method):
    instance = create_resource_instance(resource)

    if method == "post":
        payload = resource["factory"](create_image_file() if resource["name"] == "exposicoes" else None)
        response = api_client.post(
            resource["list_url"],
            payload,
            format="multipart" if resource["name"] == "exposicoes" else "json",
        )
    elif method == "patch":
        response = api_client.patch(
            resource["detail_url"](instance.pk),
            resource["patch_factory"](),
            format="json",
        )
    else:
        response = api_client.delete(resource["detail_url"](instance.pk))

    assert_permission_denied(response)


@pytest.mark.parametrize("user_fixture_name", ["user", "staff_user"])
@pytest.mark.parametrize("resource", EVENT_RESOURCES, ids=lambda resource: resource["name"])
def test_authenticated_users_can_crud_event_resources(api_client, request, user_fixture_name, resource, settings, tmp_path):
    settings.MEDIA_ROOT = tmp_path
    api_client.force_authenticate(user=request.getfixturevalue(user_fixture_name))

    # Identificar o nome do campo de imagem (company_logo para speed-hunting, image para o resto)
    img_field = "company_logo" if resource["name"] == "speed-hunting" else "image"

    # Criar payload com imagem para TODOS
    create_payload = resource["factory"](create_image_file())
    
    create_response = api_client.post(
        resource["list_url"],
        create_payload,
        format="multipart", # Podes usar multipart para todos, o DRF lida bem com isso
    )
    if create_response.status_code == 400: print(f"\nERRO NO ENDPOINT {resource['name']}: {create_response.data}")
    assert create_response.status_code == status.HTTP_201_CREATED
    assert create_response.data["id"] is not None

    detail_url = resource["detail_url"](create_response.data["id"])
    
    # Update
    update_payload = resource["patch_factory"]()
    update_payload[img_field] = create_image_file() # Garante imagem no update também

    update_response = api_client.patch(
        detail_url,
        update_payload,
        format="multipart",
    )

    assert update_response.status_code == status.HTTP_200_OK
    assert update_response.data["id"] == create_response.data["id"]

    delete_response = api_client.delete(detail_url)

    assert delete_response.status_code == status.HTTP_204_NO_CONTENT
    assert not resource["model"].objects.filter(pk=create_response.data["id"]).exists()



def test_exposicoes_returns_400_when_required_fields_are_missing(api_client, user, settings, tmp_path):
    settings.MEDIA_ROOT = tmp_path
    api_client.force_authenticate(user=user)

    for missing_field in ("title", "synopsis", "artists"):
        payload = EVENT_RESOURCES[0]["factory"](create_image_file())
        payload.pop(missing_field)

        response = api_client.post(
            EVENT_RESOURCES[0]["list_url"],
            payload,
            format="multipart",
        )

        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert missing_field in response.data