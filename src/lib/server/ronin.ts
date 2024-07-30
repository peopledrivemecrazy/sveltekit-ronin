import { RONIN_TOKEN } from '$env/static/private';
import roninFactory from 'ronin';

export const ronin = roninFactory({
	token: RONIN_TOKEN
});
