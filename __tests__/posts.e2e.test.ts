import { render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { QueryClient, QueryClientProvider } from 'react-query';
import { postAPI, useFetchAllPostsQuery, useFetchPostByIdQuery } from './postAPI';


const server = setupServer(
  rest.get('/a', (req, res, ctx) => {
    const itemsToSkip = req.url.searchParams.get('skip');
    const limit = req.url.searchParams.get('limit');
    // Mock the response for fetchAllPosts
    return res(
      ctx.status(200),
      ctx.json([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]),
    );
  }),
  rest.get('/service/:serviceId', (req, res, ctx) => {
    const postId = req.params.id;
    // Mock the response for fetchPostById
    return res(ctx.status(200), ctx.json({ id: postId, title: `Post ${postId}` }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('useFetchAllPostsQuery should fetch all posts', async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <TestComponent />
      </QueryClientProvider>,
  );

  await waitFor(() => {
    expect(queryClient.getQueryData('fetchAllPosts')).toEqual([
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
    ]);
  });
});

test('useFetchPostByIdQuery should fetch a post by id', async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <TestComponentPostById />
      </QueryClientProvider>,
  );

  await waitFor(() => {
    expect(queryClient.getQueryData(['fetchPostById', '1'])).toEqual({
      id: '1',
      title: 'Post 1',
    });
  });
});

function TestComponent() {
  const { data } = useFetchAllPostsQuery('0');
  return <div>{data?.map((post) => post.title).join(', ')}</div>;
}

function TestComponentPostById() {
  const { data } = useFetchPostByIdQuery('1');
  return <div>{data?.title}</div>;
}
