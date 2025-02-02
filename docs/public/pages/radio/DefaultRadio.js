import { html } from "@dependable/htm";
import { observable } from "@dependable/state";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Radio } from "@dependable/components/Radio/v0";
import { Hint } from "@dependable/components/Hint/v0";

const selected = observable("space-shuttle", { id: "selected-vehicle" });

const vehicles = [
  {
    id: "space-shuttle",
    label: "Space Shuttle",
    description:
      "A reusable spacecraft used by NASA for missions to low Earth orbit.",
  },
  {
    id: "apollo-lunar-module",
    label: "Apollo Lunar Module",
    description:
      "Used to land astronauts on the Moon during the Apollo missions.",
  },
  {
    id: "soyuz",
    label: "Soyuz",
    description:
      "A reliable spacecraft for transporting astronauts to and from the ISS.",
  },
  {
    id: "spaceX-dragon",
    label: "SpaceX Dragon",
    description:
      "A reusable spacecraft for cargo and crew missions to the ISS.",
  },
  {
    id: "orion",
    label: "Orion",
    description: "Designed for deep space exploration beyond low Earth orbit.",
  },
  {
    id: "james-webb-space-telescope",
    label: "James Webb Space Telescope",
    description: "A space-based observatory for studying the universe.",
  },
];

const onChange = (e) => {
  selected(e.target.value);
};

const renderVehicle = ({ id, label, description }) => html`
  <${ColumnLayout}
    columns="auto auto"
    justifyItems="start"
    alignItems="start"
    gap="0.2em"
  >
    <${Radio}
      name="space-vehicles"
      id=${id}
      value=${id}
      onChange=${onChange}
      .checked=${id === selected()}
    />
    <label for=${id}>${label}</label>
    <span />
    <${Hint}>${description}<//>
  <//>
`;

export default class Example {
  render() {
    return html`
      <h4>Select a Space Vehicle:</h4>
      <${ColumnLayout} columns="1" justifyItems="start" gap="1em">
        ${vehicles.map(renderVehicle)}
      <//>
      <p>
        <strong>Selected:</strong> ${vehicles.find((v) => v.id === selected())
          .label}
      </p>
    `;
  }
}
