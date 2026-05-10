from ninja import Router
from .schemas import HealthCheckSchema

router = Router()


@router.get("/health", response=HealthCheckSchema)
def health_check(request):
    return {"status": "ok"}
