from typing import List, Union

from fastapi import FastAPI
from models.extensions import AlbumExtended as Album, ArtistExtended as Artist, SongExtended as Song
app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/albums", response_model=List[Album])
def get_albums():
    pass


@app.get("/albums/{id}", response_model=Album)
def get_album_byid(id: str):
    pass


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
