BEGIN;

DROP TABLE IF EXISTS users, sessions, products, userbasket CASCADE;

SET timezone = 'Europe/London';

CREATE TABLE users (
  id serial primary key,
  name varchar(255) NOT NULL,
  email text unique not NULL,
  password text not null
);

CREATE TABLE sessions (
    sid text primary key,
    data json not null
);

CREATE TABLE products(
    id serial primary key,
    name text not null,
    description text not null,
    price integer not null,
    vegan boolean not null,
    image text,
    instock boolean
);

CREATE TABLE userbasket(
    userid integer references users(id),
    productid integer references products(id),
    total integer not null,
    created_at timestamp
);


INSERT INTO users (name, email, password) VALUES
('candy','candy@hotmail.com','candy123');

INSERT INTO sessions (sid, data) VALUES
('abc123','{"test":"stuff"}');

INSERT INTO products (name, description, price, vegan, instock) VALUES
('Burberry Muffin', 'blueberry muffin with gold trimmings', 17, true, true);



COMMIT;