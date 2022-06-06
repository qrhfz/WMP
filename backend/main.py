from typing import List

from fastapi import Depends, FastAPI
from fastapi.staticfiles import StaticFiles
from schemas.core import Album, Artist, Song
from services.album import AlbumService
from services.song import SongService
from services.artist import ArtistService
from models.database import Base, engine
from schemas.extensions import AlbumExtended, ArtistExtended, SongExtended
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()
MEDIA_DIR = os.getenv('MEDIA_DIR')

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

app.mount("/media", StaticFiles(directory=MEDIA_DIR), name="media")


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/albums", response_model=List[Album])
def get_albums(service: AlbumService = Depends(AlbumService)):
    return service.get_albums()


@ app.get("/albums/{id}", response_model=AlbumExtended)
def get_album_byid(id: str, service: AlbumService = Depends(AlbumService)):
    return service.get_album_byid(id)


@ app.get("/artists", response_model=List[Artist])
def get_artists(service: ArtistService = Depends(ArtistService)):
    return service.get_artists()


@ app.get("/artists/{id}", response_model=Artist)
def get_artist_byid(id: str, service: ArtistService = Depends(ArtistService)):
    return service.get_artist_byid(id)


@ app.get("/songs", response_model=List[Song])
def get_songs(service: SongService = Depends(SongService)):
    return service.get_songs()


@ app.get("/songs/{id}", response_model=Song)
def get_song_byid(id: str, service: SongService = Depends(SongService)):
    return service.get_song_byid(id)
