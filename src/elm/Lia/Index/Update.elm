module Lia.Index.Update exposing
    ( Msg(..)
    , update
    )

import Array
import Lia.Index.Model exposing (Model)
import Lia.Markdown.Inline.Stringify exposing (stringify)
import Lia.Section exposing (Section, Sections)
import Lia.Utils exposing (focus)


type Msg
    = ScanIndex String
    | DeleteSearch
    | NoOp


update : Msg -> Model -> Sections -> ( Model, Sections, Cmd Msg )
update msg model sections =
    case msg of
        ScanIndex pattern ->
            ( pattern
            , scan sections pattern
            , Cmd.none
            )

        DeleteSearch ->
            ( ""
            , scan sections ""
            , focus NoOp "lia-input-search"
            )

        NoOp ->
            ( model, sections, Cmd.none )


scan : Sections -> String -> Sections
scan sections pattern =
    let
        check =
            if pattern == "" then
                make_visible

            else
                pattern
                    |> String.toLower
                    |> search
    in
    Array.map check sections


search : String -> Section -> Section
search pattern section =
    { section
        | visible =
            section.title
                |> stringify
                |> (++) section.code
                |> String.toLower
                |> search_
                    (pattern
                        |> String.split " "
                        |> List.filter ((/=) "")
                    )
    }


search_ : List String -> String -> Bool
search_ pattern text =
    case pattern of
        [] ->
            True

        p :: ps ->
            if not <| String.contains p text then
                False

            else
                search_ ps text


make_visible : Section -> Section
make_visible section =
    { section | visible = True }
