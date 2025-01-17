export const benefitUiSchema1 = {
  id: "B1",
  name: "Health Benefit",
  description: "A benefit for health-related expenses.",
  applicationForm: {
    title: "Application Form",
    type: "object",
    properties: {
      name: {
        type: "string",
        title: "Name",
      },
      email: {
        type: "string",
        title: "Email",
        format: "email",
      },
      age: {
        type: "integer",
        title: "Age",
        minimum: 18,
      },
      gender: {
        type: "string",
        title: "Gender",
        enum: ["Male", "Female", "Other"],
      },
    },
    required: ["name", "email"],
  },
  document: {
    title: "Document Submission",
    type: "object",
    properties: {
      documentType: {
        type: "string",
        title: "Document Type",
        enum: ["Passport", "Driver's License", "ID Card"],
      },
      documentFile: {
        type: "string",
        title: "Upload Document",
        format: "data-url",
      },
      documentNumber: {
        type: "string",
        title: "Document Number",
      },
      expiryDate: {
        type: "string",
        title: "Expiry Date",
        format: "date",
      },
    },
    required: ["documentType", "documentNumber"],
  },
  eligibilityCriteria: {
    type: "object",
    properties: {
      incomeLevel: {
        type: "string",
        title: "Income Level",
        enum: ["Low", "Medium", "High"],
      },
      employmentStatus: {
        type: "string",
        title: "Employment Status",
        enum: ["Employed", "Unemployed", "Student"],
      },
    },
    required: ["incomeLevel"],
  },
};

export const benefitUiSchema2 = {
  id: "B2",
  name: "Health Benefit 2",
  description: "Another health-related benefit.",
  applicationForm: {
    title: "Application Form for Health Benefit 2",
    type: "object",
    properties: {
      name: { type: "string", title: "Name" },
      age: { type: "integer", title: "Age" },
    },
    required: ["name", "age"],
  },
  document: {
    title: "Document Submission for Health Benefit 2",
    type: "object",
    properties: {
      documentType: { type: "string", title: "Document Type" },
      documentFile: {
        type: "string",
        title: "Upload Document",
        format: "data-url",
      },
    },
    required: ["documentType"],
  },
};

export const preMatricScholarshipSC = {
  en: {
    basicDetails: {
      title: "Pre Matric Scholarship For Scheduled Tribe Students",
      category: "education-and-learning",
      subCategory: "scholarship",
      tags: [
        "ST",
        "Financial Assistance",
        "Scholarship",
        "Student",
        "Person With Disability",
        "Pre Matric",
        "PwD",
        "Scheduled Tribe",
        "Social Welfare",
        "Tuition Fee",
      ],
      applicationOpenDate: "2024-10-31",
      applicationCloseDate: "2024-12-31",
    },
    benefitContent: {
      imageUrl:
        "https://fastly.picsum.photos/id/24/200/200.jpg?hmac=Tw5b43UPAehS5e4JyB0qMQysvfLBmu_GZ_iafWou3m8",
      shortDescription: "Scholarship for ST students in classes 9 and 10.",
      shortDescription_md: "",
      longDescription:
        "A scholarship scheme by Ministry of Tribal Affairs for regular, full time students from Scheduled Tribe studying in Class 9th and 10th, in a Government School or in a School recognized by Govt. or a Central/State Board of Secondary Education. The income of the student’s Parents/Guardian should not exceed Rs. 2.00 lakh per annum. <br/> The scheme aims to support the parents of ST children for education of their wards so that the incidence of drop-out, especially in the transition from the elementary to the secondary stage is minimized. The scheme improves the participation of ST children of the prematric stage, so that they perform better and have a better chance of progressing to the post-matric stage of education. <br/>The scholarship will be available for studies in India only and will be awarded by the Government of the State/Union Territory to which the applicant belongs i.e. where she/he is domiciled. The scholarship for studying in any class will be available for only one year.",
      longDescription_md: "",
      benefits: [
        {
          type: "financial",
          title: "Financial Assistance",
          description:
            "This scholarship provides financial assistance to students. <br />Day Scholar<br />Boys - 3500<br />Girls - 3500<br />Disabled - 3850<br /><br />Hosteller<br />Boys - 7000<br />Girls - 7000<br />Disabled - 7700",
          description_md: "",
        },
      ],
      exclusions: [
        {
          description:
            "The applicant must not be availing of any other scholarship by the govt",
          description_md: "",
        },
      ],
      references: [
        {
          link: "https://scholarships.gov.in/public/schemeGuidelines/PRE_MATRIC_ST_(Class_IX_X)_GUIDELINES.pdf",
          title: "Guidelines",
        },
      ],
    },
    providingEntity: {
      type: "government",
      name: "Ministry of Tribal Welfare",
      address: {
        street: "Some Street",
        city: "New Delhi",
        state: "Delhi",
        postalCode: "110001",
      },
      department: "Tribal Welfare Department",
      contactInfo: {
        phoneNumber: "1234567890",
        email: "contact@mtw.gov.in",
      },
    },
    sponsoringEntities: [
      {
        type: "government",
        name: "Ministry of Tribal Welfare",
        address: {
          street: "Some Street",
          city: "New Delhi",
          state: "Delhi",
          postalCode: "110001",
        },
        department: "Ministry of Tribal Welfare Department",
        contactInfo: {
          phoneNumber: "1234567890",
          email: "contact@mtw.gov.in",
        },
        sponsorShare: "75",
      },
      {
        type: "government",
        name: "Tribal Welfare Department, Madhya Pradesh",
        address: {
          street: "Some Street",
          city: "Bhopal",
          state: "Madhya Pradesh",
          postalCode: "462001",
        },
        department: "Tribal Welfare",
        contactInfo: {
          phoneNumber: "9876543210",
          email: "contact@twd.mp.gov.in",
        },
        sponsorShare: "25",
      },
    ],
    eligibility: [
      {
        type: "educational",
        description:
          "The applicant must be a student studying in Class 9th or Class 10th",
        evidence: "class",
        criteria: {
          name: "class",
          condition: "in",
          conditionValues: ["9", "10"],
        },
        allowedProofs: [
          "academicCertificate",
          "bonafideCertificate",
          "enrollmentCertificate",
        ],
      },
      {
        type: "personal",
        description: "The applicant must be from Scheduled Tribe",
        evidence: "caste",
        criteria: {
          name: "caste",
          condition: "equals",
          conditionValues: "st",
        },
        allowedProofs: ["casteCertificate"],
      },
      {
        type: "economical",
        description:
          "The Total Annual income of parents/guardians of the applicant (from all sources) must not exceed ₹ 2.50 Lakh per Annum",
        evidence: "annualIncome",
        criteria: {
          name: "annualIncome",
          condition: "max",
          conditionValues: "250000",
        },
        allowedProofs: ["incomeCertificate"],
      },
      {
        type: "geographical",
        description: "The applicant must be from Madhya Pradesh state",
        evidence: "state",
        criteria: {
          name: "state",
          condition: "equals",
          conditionValues: "madhyaPradesh",
        },
        allowedProofs: ["domicileCertificate"],
      },
    ],
    documents: [
      {
        documentType: "identityProof",
        isRequired: true,
        allowedProofs: ["aadhaar"],
      },
      {
        documentType: "disablityProof",
        isRequired: false,
        allowedProofs: ["disablityCertificate"],
      },
      {
        documentType: "hostelerProof",
        isRequired: false,
        allowedProofs: ["hostelAccommodationCertificate"],
      },
    ],
    applicationProcess: {
      mode: "offline",
      description:
        "Step 1: The application form (as prescribed by the State Govt. and made available on the website of the state govt.) complete in all respects should be submitted by the student to the Head of the Institution/School.<br /><br />Step 2: The same shall be forwarded by the Head of Institution, after scrutiny and with his recommendation, to the Block / District level authorities.<br /><br />Step 3: State Governments/UT Administrations will delegate powers to sanction scholarships under the scheme to appropriate District / Block level authorities/ Heads of Institution, as appropriate.",
      description_md: "",
    },
    applicationForm: [
      {
        type: "text",
        name: "firstName",
        label: "Enter your First Name",
        required: true,
      },
      {
        type: "text",
        name: "middleName",
        label: "Enter your Middle Name",
        required: true,
      },
      {
        type: "text",
        name: "lastName",
        label: "Enter your Last Name",
        required: true,
      },
      {
        type: "radio",
        name: "gender",
        label: "Choose your Gender",
        required: true,
        options: [
          {
            value: "male",
            label: "Male",
          },
          {
            value: "female",
            label: "Female",
          },
        ],
      },
      {
        type: "select",
        name: "class",
        label: "Enter your Class",
        required: true,
        multiple: false,
        options: [
          {
            value: "9",
            label: "9",
          },
          {
            value: "10",
            label: "10",
          },
        ],
      },
      {
        type: "select",
        name: "annualIncome",
        label: "Choose your parent's Annual Income",
        required: true,
        multiple: false,
        options: [
          {
            value: "99999",
            label: "Below ₹1,00,000",
          },
          {
            value: "250000",
            label: "₹1,00,001 - ₹2,50,000",
          },
          {
            value: "500000",
            label: "₹2,50,001 - ₹5,00,000",
          },
          {
            value: "750000",
            label: "₹5,00,001 - ₹7,50,000",
          },
          {
            value: "other",
            label: "other",
          },
        ],
      },
      {
        type: "select",
        name: "caste",
        label: "Choose your Caste",
        required: true,
        multiple: false,
        options: [
          {
            value: "general",
            label: "General",
          },
          {
            value: "sc",
            label: "SC",
          },
          {
            value: "st",
            label: "ST",
          },
          {
            value: "obc",
            label: "OBC",
          },
          {
            value: "na",
            label: "NA",
          },
        ],
      },
      {
        type: "radio",
        name: "disabled",
        label: "Are you differently abled person?",
        required: true,
        options: [
          {
            value: "yes",
            label: "Yes",
          },
          {
            value: "no",
            label: "No",
          },
        ],
      },
      {
        type: "select",
        name: "disabled",
        label: "Choose your Domicile State?",
        required: true,
        multiple: false,
        options: [
          {
            value: "madhyaPradesh",
            label: "Madhya Pradesh",
          },
          {
            value: "other",
            label: "Other",
          },
        ],
      },
      {
        type: "radio",
        name: "disabled",
        label: "Are you Day Scholar/ Hostler?",
        required: true,
        options: [
          {
            value: "dayScholar",
            label: "Day Scholar",
          },
          {
            value: "hostler",
            label: "Hostler",
          },
        ],
      },
    ],
  },
};
export const preMatricScholarshipST = {
  en: {
    basicDetails: {
      title: "Pre Matric Scholarship For Scheduled Tribe Students",
      category: "education-and-learning",
      subCategory: "scholarship",
      tags: [
        "ST",
        "Financial Assistance",
        "Scholarship",
        "Student",
        "Person With Disability",
        "Pre Matric",
        "PwD",
        "Scheduled Tribe",
        "Social Welfare",
        "Tuition Fee",
      ],
      openDate: "2024-10-31",
      closeDate: "2024-12-31",
    },
    benefitContent: {
      imageUrl:
        "https://fastly.picsum.photos/id/24/200/200.jpg?hmac=Tw5b43UPAehS5e4JyB0qMQysvfLBmu_GZ_iafWou3m8",
      shortDescription: "Scholarship for ST students in classes 9 and 10.",
      shortDescription_md: "",
      longDescription:
        "A scholarship scheme by Ministry of Tribal Affairs for regular, full time students from Scheduled Tribe studying in Class 9th and 10th, in a Government School or in a School recognized by Govt. or a Central/State Board of Secondary Education. The income of the student’s Parents/Guardian should not exceed Rs. 2.00 lakh per annum. <br/> The scheme aims to support the parents of ST children for education of their wards so that the incidence of drop-out, especially in the transition from the elementary to the secondary stage is minimized. The scheme improves the participation of ST children of the prematric stage, so that they perform better and have a better chance of progressing to the post-matric stage of education. <br/>The scholarship will be available for studies in India only and will be awarded by the Government of the State/Union Territory to which the applicant belongs i.e. where she/he is domiciled. The scholarship for studying in any class will be available for only one year.",
      longDescription_md: "",
      benefits: [
        {
          type: "financial",
          title: "Financial Assistance",
          description:
            "This scholarship provides financial assistance to students. <br />Day Scholar<br />Boys - 3500<br />Girls - 3500<br />Disabled - 3850<br /><br />Hosteller<br />Boys - 7000<br />Girls - 7000<br />Disabled - 7700",
          description_md: "",
        },
      ],
      exclusions: [
        {
          description:
            "The applicant must not be availing of any other scholarship by the govt",
        },
      ],
      references: [
        {
          link: "https://scholarships.gov.in/public/schemeGuidelines/PRE_MATRIC_ST_(Class_IX_X)_GUIDELINES.pdf",
          title: "Guidelines",
        },
      ],
    },
    offeringEntity: {
      type: "Ministry",
      name: "Ministry of Tribal Welfare",
      address: {
        street: "Some Street",
        city: "New Delhi",
        state: "Delhi",
        postalCode: "110001",
      },
      department: "Tribal Welfare Department",
      contactInfo: {
        phoneNumber: "1234567890",
        email: "contact@mtw.gov.in",
      },
    },
    sponsoringEntities: [
      {
        type: "Government",
        sponsorName: "Ministry of Tribal Welfare",
        address: {
          street: "Some Street",
          city: "New Delhi",
          state: "Delhi",
          postalCode: "110001",
        },
        department: "Ministry of Tribal Welfare Department",
        contactInfo: {
          phoneNumber: "1234567890",
          email: "contact@mtw.gov.in",
        },
        sponsorShare: "75",
      },
      {
        type: "Government",
        sponsorName: "Tribal Welfare Department, Madhya Pradesh",
        address: {
          street: "Some Street",
          city: "Bhopal",
          state: "Madhya Pradesh",
          postalCode: "462001",
        },
        department: "Tribal Welfare",
        contactInfo: {
          phoneNumber: "9876543210",
          email: "contact@twd.mp.gov.in",
        },
        sponsorShare: "25",
      },
    ],
    eligibility: [
      {
        type: "education",
        clause:
          "The applicant must be a student studying in Class 9th or Class 10th",
        evidence: "class",
        criteria: {
          name: "class",
          condition: "in",
          conditionValues: ["9", "10"],
        },
        allowedproofs: [
          "academicCertificate",
          "bonafideCertificate",
          "enrollmentCertificate",
        ],
      },
      {
        type: "personal",
        clause: "The applicant must be from Scheduled Tribe",
        evidence: "caste",
        criteria: {
          name: "caste",
          condition: "equals",
          conditionValues: "st",
        },
        allowedproofs: ["casteCertificate"],
      },
      {
        type: "economic",
        clause:
          "The Total Annual income of parents/guardians of the applicant (from all sources) must not exceed ₹ 2.50 Lakh per Annum",
        evidence: "annualIncome",
        criteria: {
          name: "annualIncome",
          condition: "max",
          conditionValues: "250000",
        },
        allowedproofs: ["incomeCertificate"],
      },
      {
        type: "geographical",
        clause: "The applicant must be from Madhya Pradesh state",
        evidence: "state",
        criteria: {
          name: "state",
          condition: "equals",
          conditionValues: "madhyaPradesh",
        },
        allowedproofs: ["domicileCertificate"],
      },
    ],
    documents: [
      {
        documentType: "identityProof",
        isRequired: true,
        allowedproofs: ["aadhaar"],
      },
      {
        documentType: "disablityProof",
        isRequired: false,
        allowedproofs: ["disablityCertificate"],
      },
      {
        documentType: "hostelerProof",
        isRequired: false,
        allowedproofs: ["hostelAccommodationCertificate"],
      },
    ],
    applicationProcess: {
      mode: "offline",
      description:
        "Step 1: The application form (as prescribed by the State Govt. and made available on the website of the state govt.) complete in all respects should be submitted by the student to the Head of the Institution/School.<br /><br />Step 2: The same shall be forwarded by the Head of Institution, after scrutiny and with his recommendation, to the Block / District level authorities.<br /><br />Step 3: State Governments/UT Administrations will delegate powers to sanction scholarships under the scheme to appropriate District / Block level authorities/ Heads of Institution, as appropriate.",
      description_md: "",
    },
    applicationForm: [
      {
        type: "text",
        name: "firstName",
        label: "Enter your First Name",
        required: true,
      },
      {
        type: "text",
        name: "middleName",
        label: "Enter your Middle Name",
        required: true,
      },
      {
        type: "text",
        name: "lastName",
        label: "Enter your Last Name",
        required: true,
      },
      {
        type: "radio",
        name: "gender",
        label: "Choose your Gender",
        required: true,
        options: [
          {
            value: "male",
            label: "Male",
          },
          {
            value: "female",
            label: "Female",
          },
        ],
      },
      {
        type: "select",
        name: "class",
        label: "Enter your Class",
        required: true,
        multiple: false,
        options: [
          {
            value: "9",
            label: "9",
          },
          {
            value: "10",
            label: "10",
          },
        ],
      },
      {
        type: "select",
        name: "annualIncome",
        label: "Choose your parent's Annual Income",
        required: true,
        multiple: false,
        options: [
          {
            value: "99999",
            label: "Below ₹1,00,000",
          },
          {
            value: "250000",
            label: "₹1,00,001 - ₹2,50,000",
          },
          {
            value: "500000",
            label: "₹2,50,001 - ₹5,00,000",
          },
          {
            value: "750000",
            label: "₹5,00,001 - ₹7,50,000",
          },
          {
            value: "other",
            label: "other",
          },
        ],
      },
      {
        type: "select",
        name: "caste",
        label: "Choose your Caste",
        required: true,
        multiple: false,
        options: [
          {
            value: "general",
            label: "General",
          },
          {
            value: "sc",
            label: "SC",
          },
          {
            value: "st",
            label: "ST",
          },
          {
            value: "obc",
            label: "OBC",
          },
          {
            value: "na",
            label: "NA",
          },
        ],
      },
      {
        type: "radio",
        name: "disabled",
        label: "Are you differently abled person?",
        required: true,
        options: [
          {
            value: "yes",
            label: "Yes",
          },
          {
            value: "no",
            label: "No",
          },
        ],
      },
      {
        type: "select",
        name: "domicile",
        label: "Choose your Domicile State?",
        required: true,
        multiple: false,
        options: [
          {
            value: "madhyaPradesh",
            label: "Madhya Pradesh",
          },
          {
            value: "other",
            label: "Other",
          },
        ],
      },
      {
        type: "radio",
        name: "dayscholar/hostler",
        label: "Are you Day Scholar/ Hostler?",
        required: true,
        options: [
          {
            value: "dayScholar",
            label: "Day Scholar",
          },
          {
            value: "hostler",
            label: "Hostler",
          },
        ],
      },
    ],
  },
};
