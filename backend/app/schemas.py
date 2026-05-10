from ninja import Schema


class HealthCheckSchema(Schema):
    status: str
