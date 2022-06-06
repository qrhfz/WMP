from .database import Base
from sqlalchemy import Column, ForeignKey, String, Integer, Table
from sqlalchemy.orm import relationship
from sqlalchemy.ext.associationproxy import association_proxy


class Album(Base):
    __tablename__ = 'album'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    year = Column(Integer)
    artists = association_proxy("songs", "artists")


class Song(Base):
    __tablename__ = 'song'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    audioUrl = Column(String)
    year = Column(Integer)
    album_id = Column(Integer, ForeignKey('album.id'))
    album = relationship("Album", backref="songs")
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
    genres = relationship(
        "Genre",
        secondary=Table(
            'song_genre',
            Base.metadata,
            Column(
                "song_id",
                Integer, ForeignKey('song.id'),
                primary_key=True),
            Column(
                "genre_id",
                Integer, ForeignKey('genre.id'),
                primary_key=True)
        ),
        backref="songs"
    )


class Artist(Base):
    __tablename__ = 'artist'
    id = Column(Integer, primary_key=True)
    name = Column(String)


class Genre(Base):
    __tablename__ = 'genre'
    id = Column(Integer, primary_key=True)
    name = Column(String)
