export const verifyEmailService = async (email: string) => {
  if (email.includes('@')) {
    return { status: 200 };
  } else {
    throw new Error('um erro muito loco');
  }
};
