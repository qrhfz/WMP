from typing import List, Union

from fastapi import Depends, FastAPI
from services.album import AlbumService
from models.database import SessionLocal, Base, engine
from schemas.extensions import AlbumExtended as Album, ArtistExtended as Artist, SongExtended as Song
from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/albums", response_model=List[Album])
def get_albums(service: AlbumService = Depends(AlbumService)):
    return service.get_albums()


@app.get("/albums/{id}", response_model=Album)
def get_album_byid(id: str, service: AlbumService = Depends(AlbumService)):
    return service.get_albums_byid(id)


@app.get("/artists", response_model=List[Artist])
def get_artists():
    pass


@app.get("/artists/{id}", response_model=Artist)
def get_artist_byid(id: str):
    pass


@app.get("/songs", response_model=List[Song])
def get_songs():
    pass


@app.get("/songs/{id}", response_model=Song)
def get_song_byid(id: str):
    pass
