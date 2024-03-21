
import Toast from './Toast';
import { fn } from '@storybook/test';

export default {
  component: Toast,
  title: 'Toast',
  tags: ['autodocs'],
  args: {
    buttonAction: fn(),
    closeAction:fn(),
    
  }
};

export const Default = {
  args: {
    toast: {
      text: 'Message Here',
      icon: true,
      divider: true,
      button:true,
      close:true,
      notification:"default"
    },
  },
};
export const WithoutIcon ={
  args: {
    toast: {
      text: 'Message Here',
      divider: true,
      button:true,
      close:true,
      notification:"default"
    },
  },

}
export const WithoutAction = {
  args: {
    toast: {
      text: 'Message Here',
      icon: true,
      divider: true,
      close:true,
      notification:"default"
    },
  },
}
export const WithoutDivider ={
  args: {
    toast: {
      text: 'Message Here',
      icon: true,
      button:true,
      close:true,
      notification:"default"
    },
  },
}
export const texticon ={
  args: {
    toast: {
      text: 'Message Here',
      icon: true,
      notification:"default"
    },
  },
}
export const textOnly = {
  args: {
    toast: {
      text: 'Message Here',
      notification:"default"
    },
  },
}
export const textClose = {
  args: {
    toast: {
      text: 'Message Here',
      close:true,
      notification:"default"
    },

  },
}
export const textAction ={
  args: {
    toast: {
      text: 'Message Here',
      button:true,
    },

  },
}
export const information ={
  args:{
    toast: {
      text: 'Message Here',
      icon: true,
      divider: true,
      button:true,
      close:true,
      notification:"information"
    },
   
  
  }
}
export const warning = {
  args:{
    toast: {
      text: 'Message Here',
      icon: true,
      divider: true,
      button:true,
      close:true,
      notification:"warning"
    },
    
   
  }

}
export const success = {
  args :{
    toast: {
      text: 'Message Here',
      icon: true,
      divider: true,
      button:true,
      close:true,
      notification:"success"
    },
    
   
  }
}
export const error ={
  args :{
    toast: {
      text: 'Message Here',
      icon: true,
      divider: true,
      button:true,
      close:true,
      notification:"error"
    },
    
   
  }
}


