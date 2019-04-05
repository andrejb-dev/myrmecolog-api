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
-- Name: facility_condition; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.facility_condition AS ENUM (
    'ok',
    'crowded',
    'dirty',
    'damaged'
);


--
-- Name: issues; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.issues AS ENUM (
    'dead-ants',
    'slow-motion',
    'not-feeding',
    'low-egg-laying',
    'still-queen'
);


--
-- Name: scent; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.scent AS ENUM (
    'normal',
    'foul',
    'fermented'
);


--
-- Name: strength; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.strength AS ENUM (
    'critical',
    'weak',
    'healthy',
    'strong'
);


--
-- Name: temper; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.temper AS ENUM (
    'calm',
    'nervous',
    'angry'
);


SET default_with_oids = false;

--
-- Name: colony; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.colony (
    id integer NOT NULL,
    keeper_id integer NOT NULL,
    name text NOT NULL,
    description text,
    established timestamp with time zone
);


--
-- Name: colony_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.colony_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: colony_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.colony_id_seq OWNED BY public.colony.id;


--
-- Name: inspection; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.inspection (
    id integer NOT NULL,
    colony_id integer NOT NULL,
    executed timestamp with time zone NOT NULL,
    queen_visible boolean,
    eggs_count smallint,
    larvae_count smallint,
    pupae_count smallint,
    minor_cast_count smallint,
    median_cast_count smallint,
    major_cast_count smallint,
    soldier_cast_count smallint,
    winged_cast_count smallint,
    strength public.strength,
    temper public.temper,
    scent public.scent,
    facility_condition public.facility_condition[],
    issues public.issues[],
    hibernating boolean NOT NULL,
    notes text
);


--
-- Name: inspection_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.inspection_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: inspection_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.inspection_id_seq OWNED BY public.inspection.id;


--
-- Name: keeper; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.keeper (
    id integer NOT NULL,
    login text NOT NULL,
    password text NOT NULL,
    created timestamp with time zone NOT NULL
);


--
-- Name: task; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.task (
    id integer NOT NULL,
    colony_id integer NOT NULL,
    date_inserted date NOT NULL,
    date_due date,
    title text NOT NULL,
    description text,
    completed boolean DEFAULT false NOT NULL
);


--
-- Name: task_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.task_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.task_id_seq OWNED BY public.task.id;


--
-- Name: transfer; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.transfer (
    id integer NOT NULL,
    colony_id integer NOT NULL,
    date date NOT NULL,
    new_facility text NOT NULL,
    duration interval
);


--
-- Name: transfers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.transfers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: transfers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.transfers_id_seq OWNED BY public.transfer.id;


--
-- Name: keeper_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.keeper_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: keeper_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.keeper_id_seq OWNED BY public.keeper.id;


--
-- Name: colony id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.colony ALTER COLUMN id SET DEFAULT nextval('public.colony_id_seq'::regclass);


--
-- Name: inspection id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.inspection ALTER COLUMN id SET DEFAULT nextval('public.inspection_id_seq'::regclass);


--
-- Name: keeper id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.keeper ALTER COLUMN id SET DEFAULT nextval('public.keeper_id_seq'::regclass);


--
-- Name: task id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task ALTER COLUMN id SET DEFAULT nextval('public.task_id_seq'::regclass);


--
-- Name: transfer id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.transfer ALTER COLUMN id SET DEFAULT nextval('public.transfers_id_seq'::regclass);


--
-- Name: colony colony_id_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.colony
    ADD CONSTRAINT colony_id_pk PRIMARY KEY (id);


--
-- Name: inspection inspection_id_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.inspection
    ADD CONSTRAINT inspection_id_pk PRIMARY KEY (id);


--
-- Name: keeper keeper_id_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.keeper
    ADD CONSTRAINT keeper_id_pk PRIMARY KEY (id);


--
-- Name: keeper login_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.keeper
    ADD CONSTRAINT login_unique UNIQUE (login);


--
-- Name: task task_id_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_id_pk PRIMARY KEY (id);


--
-- Name: transfer transfer_id_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.transfer
    ADD CONSTRAINT transfer_id_pk PRIMARY KEY (id);


--
-- Name: fki_colony_keeper_id_fk; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_colony_keeper_id_fk ON public.colony USING btree (keeper_id);


--
-- Name: fki_inspection_colony_Id_fk; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_inspection_colony_Id_fk" ON public.inspection USING btree (colony_id);


--
-- Name: fki_task_colony_id_fk; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_task_colony_id_fk ON public.task USING btree (colony_id);


--
-- Name: fki_transfer_colony_id_fk; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_transfer_colony_id_fk ON public.transfer USING btree (colony_id);


--
-- Name: colony colony_keeper_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.colony
    ADD CONSTRAINT colony_keeper_id_fk FOREIGN KEY (keeper_id) REFERENCES public.keeper(id) ON DELETE CASCADE;


--
-- Name: inspection inspection_colony_Id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.inspection
    ADD CONSTRAINT "inspection_colony_Id_fk" FOREIGN KEY (colony_id) REFERENCES public.colony(id) ON DELETE CASCADE;


--
-- Name: task task_colony_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_colony_id_fk FOREIGN KEY (colony_id) REFERENCES public.colony(id) ON DELETE CASCADE;


--
-- Name: transfer transfer_colony_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.transfer
    ADD CONSTRAINT transfer_colony_id_fk FOREIGN KEY (colony_id) REFERENCES public.colony(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

