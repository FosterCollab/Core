import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { QueryProvider } from "./api/query/Providers";
import { Suspense } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<SessionProvider session={session}>
			<QueryProvider>
				<Suspense>
					<Navbar />
				</Suspense>
				<Component {...pageProps} />
				<Footer />
			</QueryProvider>
		</SessionProvider>
	);
};

export default MyApp;
