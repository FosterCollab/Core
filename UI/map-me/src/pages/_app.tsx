import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { QueryProvider } from "./api/query/Providers";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<SessionProvider session={session}>
			<QueryProvider>
				<Component {...pageProps} />
			</QueryProvider>
		</SessionProvider>
	);
};

export default MyApp;
