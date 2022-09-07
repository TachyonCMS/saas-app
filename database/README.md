CREATE DATABASE app;
CREATE USER appuser WITH ENCRYPTED PASSWORD 'appuserpassword';
ALTER DATABASE app OWNER TO appuser;
GRANT ALL PRIVILEGES ON DATABASE app TO appuser;

Tenant DB user

CREATE USER appuser WITH ENCRYPTED PASSWORD 'appuserpassword';
ALTER DATABASE app OWNER TO appuser;
GRANT ALL PRIVILEGES ON DATABASE app TO appuser;

CREATE TYPE account_status AS ENUM ('pending', 'confirmed', 'locked', 'closed');

CREATE TRIGGER set_updated
BEFORE UPDATE ON member.invitation
FOR EACH ROW
EXECUTE PROCEDURE common.trigger_set_updated();