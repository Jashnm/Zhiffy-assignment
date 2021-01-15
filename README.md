Bootstraped from `create-next-app`

## Getting Started

1. Make a clone of the repo

2. Run the development server(make sure npm/yarn in installed):

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) and check the website (make sure server is running.)

---

Summery of what has been done:

- Used Next.js for better production and SEO performance
- Used Context API and React Hooks for global state management
- Used Chakra UI for UI components and JSS
- Used Axios for API requests
- Used React-hook-form and Joi for better performant forms and client side validation respectively.

---

I used Context API and useReducer to check if user is logged in or not. This way, I can request user details anywhere in the app without writing much code.

Another simple method could be using localStorage and storing `email` of user while logging in, and then sending POST request to `/session` route to get user details.
