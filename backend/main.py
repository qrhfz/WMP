from typing import List


from fastapi import Depends, FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from config import FRONTEND_DIR, MEDIA_DIR

from models.database import Base, engine
import routes


Base.metadata.create_all(bind=engine)

app = FastAPI()
templates = Jinja2Templates(directory=FRONTEND_DIR)

origins = [
    "http://localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes.router)


app.mount("/media", StaticFiles(directory=MEDIA_DIR), name="media")
app.mount("/assets", StaticFiles(directory=FRONTEND_DIR+"/assets"), name="assets")


@app.get("/{full_path:path}")
def catch_all(full_path: str, request: Request, ):
    return templates.TemplateResponse("index.html", {"request": request})
