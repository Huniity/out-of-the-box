# OUT OF THE BOX — API Documentation (v1)

## Overview

This document describes the initial API structure for the "Out of the Box" event platform.

The platform will manage multiple types of events:

- Exhibitions
- Palestrass
- Workshops
- Video Screenings
- Concerts / Happenings
- Speed Hunting
- Special Zone — Semana Lábia 2026

Each event type has its own independent API and database structure.

---

# Base URL

/api

---

# 1. Exhibitions API

## Endpoints

GET    /api/exhibitions/
GET    /api/exhibitions/{id}/

POST   /api/exhibitions/

PUT    /api/exhibitions/{id}/

DELETE /api/exhibitions/{id}/

---

## CREATE Exhibition

POST /api/exhibitions/

### Request Body

{
  "title": "Photography Exhibition",
  "description": "Photography student projects.",
  "artist_name": "Photography Class",
  "image": "file",
  "start_datetime": "2026-07-09T10:00:00Z",
  "end_datetime": "2026-07-12T18:00:00Z",
  "location": "Main Gallery",
  "is_active": true
}

---

## DELETE Exhibition

DELETE /api/exhibitions/1/

### Response

{
  "message": "Exhibition deleted successfully."
}

---

# 2. Talks API

## Endpoints

GET    /api/talks/
GET    /api/talks/{id}/

POST   /api/talks/

PUT    /api/talks/{id}/

DELETE /api/talks/{id}/

---

## CREATE Talk

POST /api/talks/

### Request Body

{
  "title": "The Future of Artificial Intelligence",
  "description": "Talk about AI and the job market.",
  "speaker_name": "João Silva",
  "speaker_role": "Software Engineer",
  "company": "Google",
  "image": "file",
  "start_datetime": "2026-07-09T14:00:00Z",
  "end_datetime": "2026-07-09T15:30:00Z",
  "location": "Auditorium A",
  "is_active": true
}

---

## UPDATE Talk

PUT /api/talks/1/

### Request Body

{
  "title": "The Future of AI",
  "description": "Updated description.",
  "speaker_name": "João Silva",
  "speaker_role": "Senior Engineer",
  "company": "Google",
  "location": "Main Auditorium"
}

---

## DELETE Talk

DELETE /api/talks/1/

### Response

{
  "message": "Talk deleted successfully."
}

---

# 3. Workshops API

## Endpoints

GET    /api/workshops/
GET    /api/workshops/{id}/

POST   /api/workshops/

PUT    /api/workshops/{id}/

DELETE /api/workshops/{id}/

---

## CREATE Workshop

POST /api/workshops/

### Request Body

{
  "title": "React Workshop",
  "description": "Introduction to React.",
  "capacity": 30,
  "materials_required": "Laptop",
  "mentor_name": "Ana Costa",
  "image": "file",
  "start_datetime": "2026-07-10T10:00:00Z",
  "end_datetime": "2026-07-10T13:00:00Z",
  "location": "Room 3",
  "registration_required": true,
  "is_active": true
}

---

## DELETE Workshop

DELETE /api/workshops/1/

### Response

{
  "message": "Workshop deleted successfully."
}

---

# 4. Video Screenings API

## Endpoints

GET    /api/video-screenings/
GET    /api/video-screenings/{id}/

POST   /api/video-screenings/

PUT    /api/video-screenings/{id}/

DELETE /api/video-screenings/{id}/

---

## CREATE Video Screening

POST /api/video-screenings/

### Request Body

{
  "title": "Short Films 2026",
  "description": "Final projects from Cinema and TV students.",
  "duration_minutes": 90,
  "director_name": "Cinema & TV Class",
  "image": "file",
  "start_datetime": "2026-07-11T17:00:00Z",
  "end_datetime": "2026-07-11T18:30:00Z",
  "location": "Cinema Room",
  "is_active": true
}

---

## DELETE Video Screening

DELETE /api/video-screenings/1/

### Response

{
  "message": "Video screening deleted successfully."
}

---

# 5. Concerts / Happenings API

## Endpoints

GET    /api/concerts/
GET    /api/concerts/{id}/

POST   /api/concerts/

PUT    /api/concerts/{id}/

DELETE /api/concerts/{id}/

---

## CREATE Concert

POST /api/concerts/

### Request Body

{
  "title": "Live In Sight",
  "description": "Opening music event.",
  "artist_name": "DJ Example",
  "lineup": "DJ Example, Guest Artist",
  "image": "file",
  "start_datetime": "2026-07-09T21:00:00Z",
  "end_datetime": "2026-07-09T23:00:00Z",
  "location": "Outdoor Stage",
  "is_active": true
}

---

## DELETE Concert

DELETE /api/concerts/1/

### Response

{
  "message": "Concert deleted successfully."
}

---

# 6. Speed Hunting API

## Endpoints

GET    /api/speed-hunting/
GET    /api/speed-hunting/{id}/

POST   /api/speed-hunting/

PUT    /api/speed-hunting/{id}/

DELETE /api/speed-hunting/{id}/

---

## CREATE Speed Hunting

POST /api/speed-hunting/

### Request Body

{
  "title": "Tech Speed Hunting",
  "description": "Networking between companies and students.",
  "company_name": "Farotech",
  "recruiter_name": "Carlos Mendes",
  "max_candidates": 20,
  "image": "file",
  "start_datetime": "2026-07-10T14:00:00Z",
  "end_datetime": "2026-07-10T18:00:00Z",
  "location": "Networking Room",
  "registration_required": true,
  "is_active": true
}

---

## DELETE Speed Hunting

DELETE /api/speed-hunting/1/

### Response

{
  "message": "Speed Hunting event deleted successfully."
}

---

# 7. Special Zone — Semana Lábia 2026 API

## Endpoints

GET    /api/special-zones/
GET    /api/special-zones/{id}/

POST   /api/special-zones/

PUT    /api/special-zones/{id}/

DELETE /api/special-zones/{id}/

---

## CREATE Special Zone

POST /api/special-zones/

### Request Body

{
  "title": "Semana Lábia 2026",
  "description": "Special projects and interactive experiences.",
  "featured_projects": "Project A, Project B",
  "image": "file",
  "start_datetime": "2026-07-09T09:00:00Z",
  "end_datetime": "2026-07-12T20:00:00Z",
  "location": "Central Area",
  "is_active": true
}

---

## DELETE Special Zone

DELETE /api/special-zones/1/

### Response

{
  "message": "Special zone deleted successfully."
}

---

# Suggested Backend Structure

apps/
├── exhibitions/
├── talks/
├── workshops/
├── video_screenings/
├── concerts/
├── speed_hunting/
└── special_zones/

Each app should contain:

- models.py
- serializers.py
- views.py
- urls.py
- admin.py

---

# Recommended Stack

- Django
- Django REST Framework
- drf-spectacular
- PostgreSQL

---

# Notes

This structure is the initial proposal and may evolve depending on the final project requirements and event specifications.