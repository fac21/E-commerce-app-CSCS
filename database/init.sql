BEGIN;

DROP TABLE IF EXISTS users, sessions, products, userbasket CASCADE;

SET timezone = 'Europe/London';

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


INSERT INTO products (name, description, price, vegan, image, instock) VALUES
('Burberry Muffin', 'blueberry muffin with gold trimmings', 17, true, 'https://images.unsplash.com/photo-1516918977792-f0f8948aa15a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', true),
('Dolce and Banana', 'banana doughnut, gold trimmings, chocolate sprinkles', 17, true, 'http://kaleforniakravings.com/wp-content/uploads/2020/02/Banana-pancake-donuts-4-819x1024.jpg', true),
('Choco Chanel', 'chocolate glazed doughnut, caramel, gold sprinkles', 17, true, 'https://www.gretchensveganbakery.com/wp-content/uploads/2018/09/turtle-donuts-feature-resized-2-1024x683.jpg', true),
('Chewy Vuitton', 'chewy and toffee, gold dusted, caramel infused', 17, true, 'https://i.redd.it/d0kz5bs45xz61.jpg', true),
('Donutella Versace', 'nutella twisted, gold dusted, caramel infused chocolagte doughnut', 17, true, 'https://media4.s-nbcnews.com/j/newscms/2016_01/926331/gold-donut-today-160107-tease_feddb4a70c5cd0b9492ea1122b43a357.social_share_1024x768_scale.jpg', true),
('Giorgio Almondi', 'almond and chocolate doughnut, caramel, gold swirl', 17, true, 'https://d27hwuc9z2lofn.cloudfront.net/wp-content/uploads/2014/04/White-Chocolate-Almond-Baked-Donuts.jpg', true);




COMMIT;