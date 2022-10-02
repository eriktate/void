-- migrate:up
create table if not exists users(
	id serial primary key,
	username varchar(255) not null,
	created_at timestamp with time zone not null default current_timestamp,
	unique(username)
);

create table if not exists shouts(
	id bigserial primary key,
	author_id int not null references users(id),
	content text not null,
	parent_id bigint default null references shouts(id),
	created_at timestamp with time zone not null default current_timestamp
);

create index shouts_parent_id_idx on shouts using btree (parent_id);
create index shouts_author_id_idx on shouts using btree (author_id);

-- migrate:down
drop index if exists shouts_parent_id_idx;
drop index if exists shouts_author_id_idx;
drop table if exists shouts;
drop table if exists users;

