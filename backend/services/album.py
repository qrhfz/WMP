from fastapi import Depends
from sqlalchemy.orm import Session
from utils import flatten, unique
from models.database import get_db
from models.core import Album, Song, Artist
from schemas.extensions import AlbumDetail


class AlbumService:
    def __init__(self, db: Session = Depends(get_db)):
        self.db = db

    def get_albums(self):
        return self.db.query(Album).all()

    def get_album_byid(self, id: str) -> AlbumDetail:
        album = self.db.query(Album).join(Song).filter(Album.id == id).first()

        return AlbumDetail(**album.__dict__, artists=unique(flatten(album.artists)))

    def insert_album(self, album: AlbumDetail):
        db_album = Album(title=album.title, year=album.year)
        self.db.add(db_album)
        self.db.commit()
