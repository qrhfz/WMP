from typing import List
from fastapi import APIRouter, Depends
from schemas.core import Album, Artist, Song
from services.album import AlbumService
from services.song import SongService
from services.artist import ArtistService
from schemas.extensions import AlbumDetail, ArtistDetail, SongDetail
router = APIRouter(prefix="/api")


@router.get("/")
def read_root():
    return {"Hello": "World"}


@router.get("/albums", response_model=List[Album])
def get_albums(service: AlbumService = Depends(AlbumService)):
    return service.get_albums()


@router.get("/albums/{id}", response_model=AlbumDetail)
def get_album_byid(id: str, service: AlbumService = Depends(AlbumService)):
    return service.get_album_byid(id)


@router.get("/artists", response_model=List[Artist])
def get_artists(service: ArtistService = Depends(ArtistService)):
    return service.get_artists()


@router.get("/artists/{id}", response_model=ArtistDetail)
def get_artist_byid(id: str, service: ArtistService = Depends(ArtistService)):
    return service.get_artist_byid(id)


@router.get("/songs", response_model=List[Song])
def get_songs(service: SongService = Depends(SongService)):
    return service.get_songs()


@router.get("/songs/{id}", response_model=SongDetail)
def get_song_byid(id: str, service: SongService = Depends(SongService)):
    return service.get_song_byid(id)
