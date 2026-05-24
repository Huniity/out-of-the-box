from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.generic import TemplateView, RedirectView
from django.contrib.auth.decorators import login_required
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.conf.urls.static import static
from django.conf import settings

@api_view(['GET'])
def health(request):
    return Response({'status': 'ok'})

urlpatterns = [
    # Redirect authenticated users from admin index to custom dashboard
    path('admin/', login_required(
        RedirectView.as_view(url='/dashboard', permanent=False),
        login_url='/admin/login/'
    )),
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/health/', health),
    # Inserir rotas a partir de aqui
    path('api/', include('apps.events.urls')),

    # Não colocar nada depois deste comment
    re_path(r'^(?!admin|api).*$', TemplateView.as_view(template_name='index.html')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
