import React from 'react';
import { ScrollView, YStack, Text, Card, H2, Paragraph, AnimatePresence } from 'tamagui';
import { useAppSelector } from '../app/hooks';

const Home: React.FC = () => {
  const { features, appProcedures } = useAppSelector((state) => state.body);
  
  return (
    <ScrollView>
      <YStack padding="$4" space="$4">
        <AnimatePresence>
          <H2 key="portfolio-header" animation="lazy" enterStyle={{ opacity: 0, y: -10 }} fontFamily="$heading">Features</H2>
          {features.length > 0 ? (
            features.map((feature) => (
              <Card 
                key={`feature-${feature.id}`}
                padding="$4" 
                elevate 
                animation="lazy" 
                enterStyle={{ opacity: 0, x: -10 }}
                exitStyle={{ opacity: 0, x: -10 }}
              >
                <H2 color="$color" fontFamily="$heading">{feature.title}</H2>
                <Paragraph fontFamily="$body">{feature.description}</Paragraph>
              </Card>
            ))
          ) : (
            <Paragraph key="no-features" fontFamily="$body">No features available</Paragraph>
          )}
          
          <H2 key="procedures-header" animation="lazy" enterStyle={{ opacity: 0, y: -10 }} fontFamily="$heading">App Procedures</H2>
          {appProcedures.length > 0 ? (
            appProcedures.map((procedure, index) => (
              <Card 
                key={`procedure-${procedure.id}`}
                padding="$4" 
                elevate 
                animation="lazy" 
                enterStyle={{ opacity: 0, x: -10 }}
                exitStyle={{ opacity: 0, x: -10 }}
              >
                <H2 color="$color" fontFamily="$heading">{procedure.title}</H2>
                <Paragraph fontFamily="$body">{procedure.description}</Paragraph>
              </Card>
            ))
          ) : (
            <Paragraph key="no-procedures" fontFamily="$body">No app procedures available</Paragraph>
          )}
        </AnimatePresence>
      </YStack>
    </ScrollView>
  );
};

export default Home;
