from ninja import NinjaAPI
from app.api import router as app_router

api = NinjaAPI()

api.add_router("/app/", app_router)
