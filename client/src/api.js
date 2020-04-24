import { auth } from "./firebase-config";
import { post } from "./utilities";

export const createNewUser = async (values) => {
  let idToken = undefined;
  try {
    await auth.createUserWithEmailAndPassword(values.email, values.password);
    idToken = await auth.currentUser.getIdToken();
    if (values.role === "mentor") {
      await postMentor(idToken, values);
    } else {
      await postMentee(idToken, values);
    }
    await auth.currentUser.sendEmailVerification();
  } catch (error) {
    if (idToken) await post("/api/removeUser", { token: idToken });
    throw new Error("Error creating new user.");
  }
};

export const updateUser = async (user, token) => {
  const endpoint = user.role === "mentor" ? "/api/updateMentor" : "/api/updateMentee";
  await post(endpoint, { update: user, token: token});
  return user;
}

const postMentee = async (idToken, values) => {
  return await post("/api/addMentee", {
    token: idToken,
    name: values.name,
    email: values.email,
    timezone: values.timezone,
    bio: values.bio,
    subjects: values.subjects,
    guardian_name: values.guardian_name,
    guardian_email: values.guardian_email,
  });
};

const postMentor = async (idToken, values) => {
  return await post("/api/addMentor", {
    token: idToken,
    name: values.name,
    email: values.email,
    timezone: values.timezone,
    bio: values.bio,
    subjects: values.subjects,
    major: values.major,
    tags: values.tags,
    public: true,
  });
};

export const sendEmailVerification = async () => {
  if (auth.currentUser) {
    await auth.currentUser.sendEmailVerification();
  }
}
