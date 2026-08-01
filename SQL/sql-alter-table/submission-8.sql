CREATE TABLE books (
  id INTEGER,
  title TEXT,
  author TEXT
);

ALTER TABLE books ADD COLUMN published_year INTEGER;
ALTER TABLE books DROP COLUMN author; 
ALTER TABLE books RENAME COLUMN id TO isbn
-- Do not modify above this line --











-- Do not modify below this line --
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'books'
ORDER BY column_name;
