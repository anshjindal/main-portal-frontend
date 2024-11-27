const AdminData = {
  en: {
    title: "Admin - Create a Blog",
    InputTitle: "Blog Title:",
    InputSlug: "Slug:",
    InputAuthor: "Author:",
    InputTimeToRead: "Time To Read",
    Image: "Cover Image",
    SubmitButtonText: "Submit",
    errors: {
      title: "Title is required",
      slug: "Slug is required",
      author: "Author is required",
      description: "Description is required",
      timeToRead: "Time to read field is required",
      validateTimeToRead: "Time to read field must be between 0 and 60 minutes",
      image: "Please upload the image",
    },
  },
  fr: {
    title: "Admin - Créer un Blog",
    InputTitle: "Titre du Blog:",
    InputSlug: "Lien simplifié:", // Translated slug
    InputAuthor: "Auteur:",
    InputTimeToRead: "Il est temps de lire",
    Image: "Image de couverture",
    SubmitButtonText: "Soumettre",
    errors: {
      title: "Le titre est requis",
      slug: "Le lien simplifié est requis",
      author: "L'auteur est requis",
      description: "La description est requise",
      timeToRead: "Le champ Temps de lecture est obligatoire",
      validateTimeToRead:
        "Le temps de lecture du champ doit être compris entre 0 et 60 minutes",
      image: "Veuillez télécharger l'image",
    },
  },
};

export default AdminData;
