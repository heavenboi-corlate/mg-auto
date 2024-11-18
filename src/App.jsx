import { MainLayout } from "./layouts/MainLayout";
import { LoadingSpinner } from "./components/ui";
import { Hero, AboutUs, Service, Testimonials } from "./components/features";
import { useLoading } from "./hooks/useLoading";
import { ErrorBoundary } from "./components/layout";
import { ToastProvider } from "./components/ui";
import { Suspense } from "react";
import { CardSkeleton } from "./components/ui";

const ServiceSection = () => (
  <Suspense fallback={<CardSkeleton />}>
    <Service />
  </Suspense>
);

const TestimonialsSection = () => (
  <Suspense fallback={<CardSkeleton repeat={3} />}>
    <Testimonials />
  </Suspense>
);

const App = () => {
  const { isLoading, fadeOut } = useLoading();

  return (
    <ErrorBoundary>
      <ToastProvider>
        <MainLayout>
          {isLoading && <LoadingSpinner fadeOut={fadeOut} />}
          <Hero />
          <AboutUs />
          <ServiceSection />
          <TestimonialsSection />
        </MainLayout>
      </ToastProvider>
    </ErrorBoundary>
  );
};

export default App;
