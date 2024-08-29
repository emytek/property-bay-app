import { withAuth } from 'next-auth/middleware';

export default withAuth({
  // Configure middleware options here if necessary
});

export const config = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages'],
};
