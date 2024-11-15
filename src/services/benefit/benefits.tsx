import axios, { AxiosError } from "axios";
import { getToken } from "../auth/asyncStorage";
import { generateUUID } from "../../utils/jsHelper/helper";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
function handleError(error: any) {
  throw error.response ? error.response.data : new Error("Network Error");
}
export const getAll = async (userData: {
  filters: {
    "ann-hh-inc": string;
    "social-eligibility"?: string;
    "gender-eligibility"?: string;
  };
  search: string;
}) => {
  try {
    const tokenData = await getToken();
    if (!tokenData || !tokenData.token) {
      throw new Error("Token not found");
    }
    const { token } = tokenData;
    const response = await axios.post(
      `${apiBaseUrl}/content/search`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
/**
 * Login a user
 * @param {Object} loginData - Contains phone_number, password
 */
interface getOneParams {
  id: string | undefined;
}
export const getOne = async ({ id }: getOneParams) => {
  const loginData = {
    context: {
      domain: "onest:financial-support",
      action: "select",
      timestamp: "2023-08-02T07:21:58.448Z",
      ttl: "PT10M",
      version: "1.1.0",
      bap_id: "dev-uba-bap.tekdinext.com",
      bap_uri: "https://dev-uba-bap.tekdinext.com/",
      bpp_id: "dev-uba-bpp.tekdinext.com",
      bpp_uri: "https://dev-uba-bpp.tekdinext.com/",
      transaction_id: generateUUID(),
      message_id: generateUUID(),
    },
    message: {
      order: {
        items: [
          {
            id,
          },
        ],
        provider: {
          id: "BX213573733",
        },
      },
    },
  };
  try {
    const tokenData = await getToken();
    if (!tokenData || !tokenData.token) {
      throw new Error("Token not found");
    }
    const { token } = tokenData;
    const response = await axios.post(`${apiBaseUrl}/select`, loginData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response || {};
  } catch (error) {
    handleError(error);
  }
};
interface ApplyApplicationParams {
  id: string | undefined;
  context: {
    bpp_id?: string;
    bap_uri?: string;
  };
}
export const applyApplication = async ({
  id,
  context,
}: ApplyApplicationParams) => {
  const loginData = {
    context: {
      ...context,
      action: "init",
    },
    message: {
      order: {
        items: [
          {
            id,
          },
        ],
      },
    },
  };
  try {
    const tokenData = await getToken();
    if (!tokenData || !tokenData.token) {
      throw new Error("Token not found");
    }
    const { token } = tokenData;
    const response = await axios.post(`${apiBaseUrl}/init`, loginData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response || {};
  } catch (error) {
    handleError(error);
  }
};
interface ConfirmApplicationParams {
  submission_id: string | undefined;
  item_id: string | undefined;
  context: {
    bpp_id?: string;
    bap_uri?: string;
  };
}
export const confirmApplication = async ({
  submission_id,
  item_id,
  context,
}: ConfirmApplicationParams) => {
  const data = {
    context: {
      ...context,
      action: "confirm",
      message_id: generateUUID(),
      transaction_id: generateUUID(),
    },
    message: {
      order: {
        provider: {
          id: item_id,
          descriptor: {
            name: "Pre-matric Scholarship-SC",
            images: [],
            short_desc:
              "This scholarship supports SC students from Madhya Pradesh",
          },
          rateable: false,
        },
        items: [
          {
            id: item_id,
            descriptor: {
              name: "Pre-matric Scholarship-SCc",
              long_desc:
                "This scholarship supports SC students from Madhya Pradesh",
            },
            price: {
              currency: "INR",
              value: "Upto Rs.100 per year",
            },
            xinput: {
              required: true,
              form: {
                url: "http://localhost:8001/bpp/public/getAdditionalDetails/1113/5d96c1e2-8963-4e71-8f13-83438d8780e6/1938a8597a944c7884bfa7f20abcdfe4",
                data: {},
                mime_type: "text/html",
                submission_id: submission_id,
              },
            },
          },
        ],
        fulfillments: [
          {
            id: "",
            type: "SCHOLARSHIP",
            tracking: false,
            customer: {
              person: {
                name: "",
              },
              contact: {
                phone: "",
              },
            },
          },
        ],
      },
    },
  };
  try {
    const tokenData = await getToken();
    if (!tokenData || !tokenData.token) {
      throw new Error("Token not found");
    }
    const { token } = tokenData;
    const response = await axios.post(`${apiBaseUrl}/confirm`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response || {};
  } catch (error) {
    handleError(error);
  }
};
interface createApplicationParams {
  user_id: string | undefined;
  benefit_id: string | undefined;
  benefit_provider_id: string | undefined;
  benefit_provider_uri: string | undefined;
  external_application_id: string | undefined;
  application_name: string | undefined;
  status: string;
  application_data: unknown;
}
export const createApplication = async (data: createApplicationParams) => {
  try {
    const tokenData = await getToken();
    if (!tokenData || !tokenData.token) {
      throw new Error("Token not found");
    }
    const { token } = tokenData;
    const response = await axios.post(
      `${apiBaseUrl}/users/user_application`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
interface Filters {
  // Define the expected shape of the filters object
  // Example:
  user_id: string | undefined;
  benefit_id: string | undefined;
}
export const getApplication = async (filters: Filters) => {
  try {
    const tokenData = await getToken();
    if (!tokenData || !tokenData.token) {
      throw new Error("Token not found");
    }
    const { token } = tokenData;
    const response = await axios.post(
      `${apiBaseUrl}/users/user_applications_list`,
      { filters },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    handleError(error as AxiosError);
  }
};