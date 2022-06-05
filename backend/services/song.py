from fastapi import Depends
from models.core import Song
from sqlalchemy.orm import Session

from models.database import get_db


class SongService:
    def __init__(self, db: Session = Depends(get_db)):
        self.db = db

    def get_songs(self):
        return self.db.query(Song).all()

    def get_song_byid(self, id: str):
        return self.db.query(Song).filter(Song.id == id).first()
