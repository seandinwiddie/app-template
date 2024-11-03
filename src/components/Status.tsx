import React from 'react';
import { ScrollView, YStack, Text, Card, H2, Paragraph, AnimatePresence } from 'tamagui';
import { useAppSelector } from '../app/hooks';

const Status: React.FC = () => {
  const { portfolioFeatures, appProcedures } = useAppSelector((state) => state.body);
  const { value: brandName, isLoading: isBrandNameLoading } = useAppSelector((state) => state.brandName);

  if (isBrandNameLoading) {
    return <Text fontFamily="$body">Loading status...</Text>;
  }

  return (
    <ScrollView>
      <YStack padding="$4" space="$4">
        <AnimatePresence>
          <H2 key="application-status" animation="lazy" enterStyle={{ opacity: 0, y: -10 }} fontFamily="$heading">Application Status</H2>
          
          <Card key="api-status" padding="$4" elevate animation="lazy" enterStyle={{ opacity: 0, x: -10 }}>
            <H2 fontFamily="$heading">API Status</H2>
            {isBrandNameLoading && <Paragraph fontFamily="$body">Loading...</Paragraph>}
            {!isBrandNameLoading && (
              <Paragraph fontFamily="$body">Brand Name: {brandName}</Paragraph>
            )}
          </Card>
        </AnimatePresence>
      </YStack>
    </ScrollView>
  );
};

export default Status;
