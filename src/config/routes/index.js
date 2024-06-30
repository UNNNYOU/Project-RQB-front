export const Routes = {
  home: "/",
  login: "/login",
  questions: "/questions",
  questionsNew: "/questions/new",
  question: (uuid) => `/questions/${uuid}`,
  user: (uuid) => `/users/${uuid}`,
  termOfService: "/term-of-service",
  privacyPolicy: "/privacy-policy",
  contact: "/contact",
}