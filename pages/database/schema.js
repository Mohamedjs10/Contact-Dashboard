import mongoose from "mongoose";

// si_directors
const si_directorsSchema = new mongoose.Schema(
  {
    name: { en: String, ar: String },
    position: { en: String, ar: String },
    imgUrl: String,
  },
  {
    versionKey: false,
  }
);
export const si_directors =
  mongoose.models.Si_director ||
  mongoose.model("Si_director", si_directorsSchema);
// sl_directors
const sl_directorsSchema = new mongoose.Schema(
  {
    name: { en: String, ar: String },
    position: { en: String, ar: String },
    imgUrl: String,
  },
  {
    versionKey: false,
  }
);
export const sl_directors =
  mongoose.models.Sl_director ||
  mongoose.model("Sl_director", sl_directorsSchema);
// si_teams
const si_teamsSchema = new mongoose.Schema(
  {
    name: { en: String, ar: String },
    position: { en: String, ar: String },
    imgUrl: String,
  },
  {
    versionKey: false,
  }
);
export const si_teams =
  mongoose.models.Si_team || mongoose.model("Si_team", si_teamsSchema);
// sl_teams
const sl_teamsSchema = new mongoose.Schema(
  {
    name: { en: String, ar: String },
    position: { en: String, ar: String },
    imgUrl: String,
  },
  {
    versionKey: false,
  }
);
export const sl_teams =
  mongoose.models.Sl_team || mongoose.model("Sl_team", sl_teamsSchema);
// si_events
const si_eventsSchema = new mongoose.Schema(
  {
    pLink: String,
    title: { en: String, ar: String },
    date: String,
    text: { en: String, ar: String },
    imgUrl: { en: String, ar: String },
  },
  {
    versionKey: false,
  }
);
export const si_events =
  mongoose.models.Si_event || mongoose.model("Si_event", si_eventsSchema);
// sl_events
const sl_eventsSchema = new mongoose.Schema(
  {
    pLink: String,
    title: { en: String, ar: String },
    date: String,
    text: { en: String, ar: String },
    imgUrl: { en: String, ar: String },
  },
  {
    versionKey: false,
  }
);
export const sl_events =
  mongoose.models.Sl_event || mongoose.model("Sl_event", sl_eventsSchema);
// si_news
const si_newsSchema = new mongoose.Schema(
  {
    pLink: String,
    title: { en: String, ar: String },
    date: String,
    text: { en: String, ar: String },
    imgUrl: { en: String, ar: String },
  },
  {
    versionKey: false,
  }
);
export const si_news =
  mongoose.models.Si_new || mongoose.model("Si_new", si_newsSchema);
// sl_news
const sl_newsSchema = new mongoose.Schema(
  {
    pLink: String,
    title: { en: String, ar: String },
    date: String,
    text: { en: String, ar: String },
    imgUrl: { en: String, ar: String },
  },
  {
    versionKey: false,
  }
);
export const sl_news =
  mongoose.models.Sl_new || mongoose.model("Sl_new", sl_newsSchema);
// si_cards_commercial
const si_commercialCardsSchema = new mongoose.Schema(
  {
    imgUrl: String,
    title: { en: String, ar: String },
    subtitle: { en: String, ar: String },
    text: { en: String, ar: String },
    imgRight: Boolean,
    proLink: String,
  },
  {
    versionKey: false,
  }
);
export const si_commercial_cards =
  mongoose.models.Si_commercial_card ||
  mongoose.model("Si_commercial_card", si_commercialCardsSchema);
// sl_cards_commercial
const sl_commercialCardsSchema = new mongoose.Schema(
  {
    imgUrl: String,
    title: { en: String, ar: String },
    subtitle: { en: String, ar: String },
    text: { en: String, ar: String },
    imgRight: Boolean,
    proLink: String,
  },
  {
    versionKey: false,
  }
);
export const sl_commercial_cards =
  mongoose.models.Sl_commercial_card ||
  mongoose.model("Sl_commercial_card", sl_commercialCardsSchema);
// si_cards_retail
const si_retailCardsSchema = new mongoose.Schema(
  {
    imgUrl: String,
    title: { en: String, ar: String },
    subtitle: { en: String, ar: String },
    text: { en: String, ar: String },
    imgRight: Boolean,
    proLink: String,
  },
  {
    versionKey: false,
  }
);
export const si_retail_cards =
  mongoose.models.Si_retail_card ||
  mongoose.model("Si_retail_card", si_retailCardsSchema);
// sl_cards_retail
const sl_retailCardsSchema = new mongoose.Schema(
  {
    imgUrl: String,
    title: { en: String, ar: String },
    subtitle: { en: String, ar: String },
    text: { en: String, ar: String },
    imgRight: Boolean,
    proLink: String,
  },
  {
    versionKey: false,
  }
);
export const sl_retail_cards =
  mongoose.models.Sl_retail_card ||
  mongoose.model("Sl_retail_card", sl_retailCardsSchema);
