create table collectibles
(
    id serial primary key not null,
    name varchar(40) not null,
    category varchar(80) not null,
    price integer
);