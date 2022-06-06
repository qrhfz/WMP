from typing import List
from dotenv import load_dotenv
import os

from fastapi import Depends, FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from models.database import Base, engine
import routes

load_dotenv()
MEDIA_DIR = os.getenv('MEDIA_DIR')
FRONTEND_DIR = os.getenv('FRONTEND_DIR')

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:8080",
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
app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")
