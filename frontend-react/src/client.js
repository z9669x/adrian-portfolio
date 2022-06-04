import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '2bjgsxek',
  dataset: 'production',
  apiVersion: '2022-05-25',
  useCdn: true,
  token: 'skQxOPNFZzbIU65ThmflwHCBAA7sukb8HjNiOR0aNSctpGdiucTiyOZ7GHZ5VVNPeni14WvmvnylG2drdexCScUDGImB2EVn1o4vlwz0hK2zphxB8zU6lJjMapU9oW10vJbvqeX3JGOnUXwpAyutg5ahs7YfW3TTFIswPFCoPCkq7mWbFJ3G'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);