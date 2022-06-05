from fastapi import Depends
from models.core import Artist
from sqlalchemy.orm import Session

from models.database import get_db


class ArtistService:
    def __init__(self, db: Session = Depends(get_db)):
        self.db = db

    def get_artists(self):
        return self.db.query(Artist).all()

    def get_artist_byid(self, id: str):
        return self.db.query(Artist).filter(Artist.id == id).first()
