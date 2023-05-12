import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_COWORK } from "../../graphql/mutations";
import { useNavigate } from "react-router-dom";

const AddCowrk = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    description: "",
    url: "",
  });

  const [createCowork] = useMutation(CREATE_COWORK, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
    onCompleted: () => navigate("/home"),
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createCowork();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value,
              })
            }
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value,
              })
            }
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCowrk;
