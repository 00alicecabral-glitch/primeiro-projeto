import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" /><IonSearchbar></IonSearchbar>
      <IonSearchbar placeholder="Custom Placeholder"></IonSearchbar>
      <IonSearchbar disabled={true} placeholder="Disabled"></IonSearchbar>
      <IonSearchbar value="Value"></IonSearchbar>
      <IonSearchbar animated={true} placeholder="Animated"></IonSearchbar>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
