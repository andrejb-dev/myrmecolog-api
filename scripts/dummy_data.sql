--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2 (Ubuntu 11.2-1.pgdg16.04+1)
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: keeper; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.keeper VALUES (2, 'dummy@dummy.com', 'dummy', '2019-04-06 00:00:00+00');
INSERT INTO public.keeper VALUES (3, 'test@test.com', 'test', '2019-03-03 00:00:00+00');


--
-- Data for Name: colony; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.colony VALUES (4, 3, 'test_colony 1', 'Description', '2019-03-20 00:00:00+00');
INSERT INTO public.colony VALUES (5, 3, 'test_colony 2', 'Description', '2019-02-20 00:00:00+00');
INSERT INTO public.colony VALUES (6, 3, 'test_colony 3', 'Description', '2019-04-20 00:00:00+00');
INSERT INTO public.colony VALUES (7, 2, 'dummy colony 1', 'Description', '2019-04-10 00:00:00+00');
INSERT INTO public.colony VALUES (8, 2, 'dummy colony 2', 'Description', '2019-03-10 00:00:00+00');


--
-- Data for Name: inspection; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.inspection VALUES (1, 4, '2019-04-01 20:00:00+00', true, 5, 4, 3, 10, 3, 2, 1, 0, 'healthy', 'calm', 'normal', '{crowded,dirty}', '{dead-ants,slow-motion}', false, 'Notes for the inspection');
INSERT INTO public.inspection VALUES (2, 4, '2019-04-03 20:00:00+00', true, 7, 6, 4, 8, 3, 0, 1, 0, 'weak', 'nervous', 'normal', '{dirty}', '{dead-ants,not-feeding}', false, 'Notes for the inspection');
INSERT INTO public.inspection VALUES (3, 4, '2019-04-09 20:00:00+00', true, 7, 6, 4, 8, 3, 0, 1, 0, 'weak', 'nervous', 'normal', '{dirty}', '{dead-ants,not-feeding}', false, 'Notes for the inspection');


--
-- Data for Name: task; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.task VALUES (3, 4, '2019-04-03', '2019-05-20', 'Task title', 'Task description', false);
INSERT INTO public.task VALUES (4, 4, '2019-04-07', '2019-06-20', 'Another Task title', 'Task description', false);
INSERT INTO public.task VALUES (5, 4, '2019-03-07', '2019-10-20', 'Yet Another Task title', 'Task description', true);


--
-- Data for Name: transfer; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.transfer VALUES (1, 4, '2019-04-20', 'vacsia skumavka', '2 days');
INSERT INTO public.transfer VALUES (2, 4, '2019-05-20', 'male formi', '05:00:00');


--
-- Name: colony_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.colony_id_seq', 8, true);


--
-- Name: inspection_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.inspection_id_seq', 3, true);


--
-- Name: task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.task_id_seq', 5, true);


--
-- Name: transfers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.transfers_id_seq', 2, true);


--
-- Name: keeper_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.keeper_id_seq', 3, true);


--
-- PostgreSQL database dump complete
--

