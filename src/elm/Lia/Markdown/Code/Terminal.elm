module Lia.Markdown.Code.Terminal exposing
    ( Msg(..)
    , Terminal
    , init
    , update
    , view
    )

import Array exposing (Array)
import Html exposing (Html)
import Html.Attributes as Attr
import Html.Events exposing (onInput)
import Lia.Utils exposing (onKeyDown)


type alias Terminal =
    { input : String
    , history : Array String
    , history_value : Int
    }


init : Terminal
init =
    Terminal "" Array.empty 0



-- UPDATE


type Msg
    = KeyDown Int
    | Input String


update : Msg -> Terminal -> ( Terminal, Maybe String )
update msg terminal =
    case msg of
        KeyDown key ->
            if key == 13 then
                ( print_to terminal, Just <| terminal.input ++ "\n" )

            else if key == 38 then
                ( restore_input True terminal, Nothing )

            else if key == 40 then
                ( restore_input False terminal, Nothing )

            else
                ( terminal, Nothing )

        Input str ->
            ( { terminal | input = str }, Nothing )



-- VIEW


view : Terminal -> Html Msg
view terminal =
    Html.div
        [ Attr.class "lia-code-terminal__input"
        ]
        [ Html.i [ Attr.class "icon icon-chevron-double-right" ] []
        , Html.input
            [ onInput Input
            , onKeyDown KeyDown
            , Attr.value terminal.input
            ]
            []
        ]


print_to : Terminal -> Terminal
print_to terminal =
    if
        (terminal.history
            |> Array.get terminal.history_value
            |> Maybe.map (\h -> h /= terminal.input)
            |> Maybe.withDefault True
        )
            && (terminal.input /= "")
    then
        { terminal
            | input = ""
            , history = Array.push terminal.input terminal.history
            , history_value = Array.length terminal.history + 1
        }

    else
        { terminal
            | input = ""
            , history_value = terminal.history_value + 1
        }


restore_input : Bool -> Terminal -> Terminal
restore_input up terminal =
    let
        new_hist =
            if up then
                terminal.history_value - 1

            else
                terminal.history_value + 1
    in
    case Array.get new_hist terminal.history of
        Just str ->
            { terminal | input = str, history_value = new_hist }

        Nothing ->
            terminal
