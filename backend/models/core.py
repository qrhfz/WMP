from .database import Base
from sqlalchemy import Column, ForeignKey, String, Integer, Table
from sqlalchemy.orm import relationship


class Album(Base):
    __tablename__ = 'album'
    id = Column(String(36), primary_key=True)
    title = Column(String)
    year = Column(Integer)
    artists = relationship(
        "Artist",
        secondary=Table(
            'album_artist',
            Base.metadata,
            Column(
                "album_id",
                Integer, ForeignKey('album.id'),
                primary_key=True),
            Column(
                "artist_id",
                Integer, ForeignKey('artist.id'),
                primary_key=True)
        ),
        backref="albums"
    )


class Song(Base):
    __tablename__ = 'song'
    id = Column(String(36), primary_key=True)
    title = Column(String)
    audioUrl = Column(String)
    year = Column(Integer)
    album_id = Column(Integer, ForeignKey('album.id'))
    album = relationship("Album")
    artists = relationship(
        "Artist",
        secondary=Table(
            'song_artist',
            Base.metadata,
            Column(
                "song_id",
                Integer, ForeignKey('song.id'),
                primary_key=True),
            Column(
                "artist_id",
                Integer, ForeignKey('artist.id'),
                primary_key=True)
        ),
        backref="songs"
    )


class Artist(Base):
    __tablename__ = 'artist'
    id = Column(String(36), primary_key=True)
    title = Column(String)
