export default {
  template: `
    <ul>
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete" class="ml-3" />
            </label>
        </li>
    </ul>
    `,

  props: {
    assignment: Object,
  },
};
