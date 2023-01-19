import * as React from "react";
import { AutoForm } from "uniforms-bootstrap5";
import { bridge as schema } from './skills.schema';

const EditSkillsComponent = (props) => {
  return (
    <AutoForm
      schema={schema}
      onSubmit={console.log} 
      model={props.model}
    />
  );
};

export default EditSkillsComponent;
