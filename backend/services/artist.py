from fastapi import Depends
from schemas.extensions import ArtistDetail
from utils import flatten, unique
from models.core import Artist
from sqlalchemy.orm import Session

from models.database import get_db


class ArtistService:
    def __init__(self, db: Session = Depends(get_db)):
        self.db = db

    def get_artists(self):
        return self.db.query(Artist).all()

    def get_artist_byid(self, id: str):
        artist = self.db.query(Artist).filter(Artist.id == id).first()
        return ArtistDetail(id=artist.id, name=artist.name, songs=artist.songs, albums=unique(artist.albums))
