import { Alert } from 'react-native'

export const Info = (title="",sub="",onTap=null) =>{
    Alert.alert(
        title,
        sub,
        [
          {
            text: "OK",
            onPress: () => {                
                if(onTap) onTap();
            }
          },
        ],
        { cancelable: false }
    );    
}

export const Confirm = (title="",desc="",onApprove=()=>{},onDecline=()=>{}) => {
    Alert.alert(
        title,
        desc,
        [          
          {
            text: "OK",
            onPress: () => {                
                onApprove();
            }
          },
          {
            text: "CANCEL",
            onPress: () => {                
                onDecline();
            }
          }
        ],
        { cancelable: false }
    );
}