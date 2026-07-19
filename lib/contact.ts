export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  area: string;
  message: string;
};

export function validateContact(payload: ContactPayload): string | null {
  if (!payload.name.trim()) return "Please enter your name.";
  if (!payload.email.trim()) return "Please enter your work email.";
  if (!/^\S+@\S+\.\S+$/.test(payload.email)) return "Please enter a valid work email.";
  if (!payload.message.trim()) return "Please add a message.";
  return null;
}
