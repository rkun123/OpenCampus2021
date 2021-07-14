import Viewer from "../work/Viewer.vue";


export default { 
    title: 'Viewer',
    component: Viewer, 
};

export const viewer = () => ({
    components: { Viewer },
    templete:'<slide />'
  });